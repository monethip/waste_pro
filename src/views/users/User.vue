<template>
  <v-container>
    <div style="z-index: 9999;">
      <div id="recaptcha-container"></div>
    </div>

    <v-row class="mb-n6">
      <v-col>
        <v-btn @click="creatUser()" class="btn-primary"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="my-auto">
            ຂໍ້ມູນ Users ({{ pagination.total }})
            <v-divider class="mx-4" vertical></v-divider>
            <v-spacer></v-spacer>
            <v-row>
              <v-col>
                <v-select
                  outlined
                  dense
                  :items="roles"
                  v-model="selectedRoles"
                  item-text="name"
                  item-value="name"
                  label="Roles"
                  multiple
                  @input="fetchData()"
                ></v-select>
                <v-spacer></v-spacer>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="search"
                  clearable
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  @keyup.enter="Search()"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <!--Role -->
            <template v-slot:item.roles="{ item }">
              <div>
                <span v-for="(role, index) in item.roles" :key="index">
                  <v-chip color="info" label class="mr-1 my-1">
                    {{ role.name }}
                  </v-chip>
                </span>
              </div>
            </template>
            <!--Permission -->
            <template v-slot:item.permissions="{ item }">
              <div>
                <span v-for="(ps, index) in item.permissions" :key="index">
                  <v-chip color="success" label class="mr-1 my-1">{{
                    ps.name
                  }}</v-chip>
                </span>
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                label
                small
                class="mr-2"
                @click="changeStatus(item)"
                :color="statusColor(item.status)"
              >
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    medium
                    class="mr-2"
                    >mdi-dots-vertical</v-icon
                  >
                </template>
                <v-list>
                  <v-list-item link @click="openModalRole(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-plus </v-icon>
                      ເພີ່ມ Role
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="openModalUpdateRole(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-key-remove </v-icon>
                      ຖອນ Role
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="openModalPermission(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-plus </v-icon>
                      ເພີ່ມ Permission
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="openModalUpdatePermission(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-key-remove </v-icon>
                      ຖອນ Permission
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link @click="OpenModalEdit(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="resetPassword(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-key </v-icon>
                      Reset Password
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="changePhone(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-phone </v-icon>
                      ປ່ຽນເບີໂທ
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small> mdi-delete </v-icon>
                      ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <br />
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            ></Pagination>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add user</span>
          </v-card-title>
          <v-card-text>
            <v-stepper v-model="stepValue">
              <v-stepper-header>
                <v-stepper-step
                    :complete="stepValue > 1"
                    step="1"
                >
                  Phone Number
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                    :complete="stepValue > 2"
                    step="2"
                >
                  Verify Code
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  User Info
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">

          <v-row>
            <v-col cols="12">
              <v-form ref="phone" lazy-validation>
              <v-text-field
                  label="ເບີໂທ *"
                  required
                  v-model="phone"
                  :rules="phoneRules"
                  type="number"
                  class="input-number"
              ></v-text-field>
              </v-form>
              <p class="errors">
                {{ server_errors.phone }}
              </p>
            </v-col>
          </v-row>

                  <v-btn
                      color="primary"
                      @click="verifyPhone"
                      :loading="loading"
                      :disabled="loading"
                  >
                    Continue
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12">
                      <div style="display: flex; flex-direction: row;">
                        <v-otp-input
                            ref="otpInput"
                            input-classes="otp-input"
                            separator=""
                            :num-inputs="6"
                            :should-auto-focus="true"
                            :is-input-num="true"
                            @on-complete="handleOnComplete"
                            class="otp"
                        />

                        <v-btn class="btnClear" text @click="handleClearInput()">Clear</v-btn>
                      </div>
                    </v-col>
                  </v-row>

                  <v-btn
                      color="primary"
                      :loading="loading"
                      :disabled="loading"
                      @click="verifyOtp"
                  >
                    Continue
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-container>
                    <v-form ref="form" lazy-validation>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                              label="Name *"
                              required
                              v-model="user.name"
                              :rules="nameRules"
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.name }}
                          </p>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              label="ເບີໂທ *"
                              required
                              v-model="phone"
                              :rules="phoneRules"
                              type="number"
                              class="input-number"
                              disabled
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.phone }}
                          </p>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              label="Email"
                              required
                              v-model="user.email"
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.email }}
                          </p>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              label="Password *"
                              type="password"
                              v-model="user.password"
                              :rules="passwordRules"
                              required
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.password }}
                          </p>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              label="Password Confirm *"
                              type="password"
                              v-model="user.password_confirmation"
                              :rules="passwordConfirmRules"
                              required
                              @keyup.enter="AddItem"
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.password_confirmation }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-container>

                  <v-btn
                      color="primary"
                      :loading="loading"
                      :disabled="loading"
                      @click="AddItem()"
                  >
                    Save
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
<!--              <v-btn-->
<!--                color="blue darken-1"-->
<!--                text-->
<!--                :loading="loading"-->
<!--                :disabled="loading"-->
<!--                @click="AddItem()"-->
<!--              >-->
<!--                Save-->
<!--              </v-btn>-->
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template @close="close" v-slot="">
        <v-card>
          <v-card-title>
            <span class="headline">ແກ້ໄຂ User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="edit_user.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ເບີໂທ *"
                      required
                      v-model="edit_user.phone"
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email"
                      required
                      v-model="edit_user.email"
                      :rules="emailRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

<!--    Change Phone -->
    <!-- Modal Add-->
    <v-dialog v-model="changePhoneDialog" max-width="720px" persistent>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Change Phone {{edit_user.name}}</span>
          </v-card-title>
          <v-card-text>

            <v-stepper v-model="stepValue">
              <v-stepper-header>
                <v-stepper-step
                    :complete="stepValue > 1"
                    step="1"
                >
                  Phone Number
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                    :complete="stepValue > 2"
                    step="2"
                >
                  Verify Code
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  Confirm
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">

                  <v-row>
                    <v-col cols="12">
                      <v-form ref="phone" lazy-validation>
                        <v-text-field
                            label="ເບີໂທ *"
                            required
                            v-model="phone"
                            :rules="phoneRules"
                            type="number"
                            class="input-number"
                        ></v-text-field>
                      </v-form>
                      <p class="errors">
                        {{ server_errors.phone }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-btn
                      color="primary"
                      @click="verifyPhone"
                      :loading="loading"
                      :disabled="loading"
                  >
                    Continue
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12">
                      <div style="display: flex; flex-direction: row;">
                        <v-otp-input
                            ref="otpInput"
                            input-classes="otp-input"
                            separator=""
                            :num-inputs="6"
                            :should-auto-focus="true"
                            :is-input-num="true"
                            @on-complete="handleOnComplete"
                            class="otp"
                        />

                        <v-btn class="btnClear" text @click="handleClearInput()">Clear</v-btn>
                      </div>
                    </v-col>
                  </v-row>

                  <v-btn
                      color="primary"
                      @click="verifyOtp"
                      :loading="loading"
                      :disabled="loading"
                  >
                    Continue
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-container>
                    <v-form ref="form" lazy-validation>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                              label="ເບີໂທ *"
                              required
                              v-model="phone"
                              :rules="phoneRules"
                              type="number"
                              class="input-number"
                              disabled
                          ></v-text-field>
                          <p class="errors">
                            {{ server_errors.phone }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-container>
                  <v-btn
                      color="primary"
                      :loading="loading"
                      :disabled="loading"
                      @click="changePhone()"
                  >
                    Change
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeChangePhone">
                Close
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <!--Change Password -->
    <v-dialog v-model="changePasswordDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Reset Password
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Password *"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <p class="errors">
                    {{ server_errors.password }}
                  </p>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password Confirm *"
                    type="password"
                    v-model="password_confirm"
                    :rules="passwordConfirmRules"
                    required
                    @keyup.enter="resetPasswordAction"
                  ></v-text-field>
                  <p class="errors">
                    {{ server_errors.password_confirmation }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeReset()">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="resetPasswordAction"
            >
              Reset
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Change status -->
    <v-dialog v-model="changeStatusDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >ປ່ຽນສະຖານະ
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    label="Status *"
                    :items="statuses"
                    v-model="edit_user.status"
                    item-text="name"
                    item-value="name"
                    required
                  ></v-select>
                  <p class="errors">
                    {{ server_errors.status }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="changeStatusDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="switchStatus"
            >
              Change
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Add Role -->
    <v-dialog v-model="roleDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Add Role to
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="edit_user.roles"
                    :items="roles"
                    item-text="name"
                    item-value="name"
                    label="Role"
                    multiple
                    :rules="rulePermissionRole"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="roleDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddRole"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Update Role -->
    <v-dialog v-model="updateRoleDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Remove Role from
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="selectedRole"
                    :items="revokeRoles"
                    item-text="name"
                    item-value="name"
                    label="Role"
                    multiple
                    :rules="rulePermissionRole"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="updateRoleDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="UpdateRole"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Add Permission -->
    <v-dialog v-model="permissionDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Add Permission to
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="edit_user.permissions"
                    :items="permissions"
                    item-text="name"
                    item-value="name"
                    label="Permission *"
                    multiple
                    :rules="rulePermission"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="permissionDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddPermission"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Update Permission -->
    <v-dialog v-model="updatePermissionDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Remove Permission from
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="selectedPermission"
                    :items="revokes"
                    item-text="name"
                    item-value="name"
                    label="Permission"
                    multiple
                    :rules="rulePermission"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="updatePermissionDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="UpdatePermission"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Delete Modal-->

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="deleteItemConfirm"
          >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import firebase from "firebase";
import queryOption from "@/Helpers/queryOption";
export default {
  title() {
    return `Vientiane Waste Co-Dev|User`;
  },
  name: "User",
  data() {
    return {
      stepValue: 1,
      otp:"",
      isStepTwo:false,
      headers: [
        { text: "User Name", value: "name" },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Role", value: "roles", sortable: false },
        { text: "Permission", value: "permissions", sortable: false },
        { text: "Status", value: "status", sortable: false, align: "center" },
        { text: "", value: "actions", sortable: false },
      ],
      loading: false,
      users: [],
      user: {},
      phone:"",
      edit_user: {},
      userID: "",
      server_errors: {
        email: "",
        roleId: "",
      },
      errormsg: "",
      roleDialog: false,
      updateRoleDialog: false,
      changePasswordDialog: false,
      changeStatusDialog: false,
      changePhoneDialog:false,

      selectedRole: "",
      selectedRoles: [],
      roles: [],
      revokeRoles: [],
      permissionDialog: false,
      updatePermissionDialog: false,
      selectedPermission: "",
      permissions: [],
      revokes: [],
      code:"",
      appVerifier:"",
      btnVerify:false,

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 12,
      search: "",
      oldVal: "",
      // resetPassword
      password: "",
      password_confirm: "",
      statuses: [
        {
          name: "active",
        },
        {
          name: "inactive",
        },
      ],
      status: "",
      id_token:"",

      //Validation
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passwordConfirmRules: [
        (v) => !!v || "Password Confirm is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 8 && v.length <= 11) ||
          "Phone number must be  8 - 11 numbers",
      ],
      rulePermission: [(v) => !!v || "Permission is required"],
      rulePermissionRole: [(v) => !!v || "Role is required"],
    };
  },
  methods: {
    creatUser() {
      this.$router.push({
        name: "CreateUser",
      });
    },
    AddItem() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.user.id_token = this.id_token;
        this.$axios
          .post("user-setting/user", this.user)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.user = {};
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status === 422) {
              let obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    verifyPhone(){
      // this.btnVerify = true;
      this.loading = true;
      if (this.$refs.phone.validate() === true){
        this.$axios
            .post("unique-phone", {phone:this.phone})
            .then((res) => {
              if (res.data.code === 200) {
                  console.error(res.data.data.exists)
                  if(res.data.data.exists === false){
                    this.initReCaptcha();
                    this.sendOtp();
                    this.loading = true;
                  } else if(res.data.data.exists === true){
                    this.btnVerify = false;
                    this.$store.commit("Toast_State", {
                      value: true,
                      color: "error",
                      msg: "ເບີນີ້ມີໃນລະບົບແລ້ວ",
                    });
                  }
                // this.btnVerify = false;
                  this.loading = false;
              }
            })
            .catch(() => {
              this.btnVerify = false;
            });
      }
    },
    sendOtp() {
      // this.btnVerify = true;
        let countryCode = "+85620"; //laos
        let phoneNumber = countryCode + this.phone;
        let appVerifier = this.appVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(confirmationResult => {
              window.confirmationResult = confirmationResult;
              this.stepValue = 2;
              // this.btnVerify = false;
              // this.loading = true;
            })
            .catch(function () {
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: "SMS not sent",
              });
              // this.loading = true;
            });
    },

    verifyOtp() {
      // this.btnVerify = true;
      let code = this.code;
      window.confirmationResult
          .confirm(code)
          .then((res) => {
            if (res) {
              const token = (res.user);
              this.id_token = token._lat;
              console.log(this.id_token);
              this.stepValue = 3;
            }
          })
          .catch(function () {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: "ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່",
            });
          });

    },


    initReCaptcha() {
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              // callback: function (response) {
              //   // reCAPTCHA solved, allow signInWithPhoneNumber.
              //   // ...
              // },
              "expired-callback": function () {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
              },
            }
        );
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("user-setting/user", {
          params: queryOption([
            {page: this.pagination.current_page},
            {per_page: this.per_page},
            {filter: this.search},
            {roles: this.selectedRoles},])
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Loading_State", false);
              this.users = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchRole() {
      //Role
      let roles = [];
      this.$axios
        .get("user-setting/role")
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.loading = false;
              this.roles = res.data.data;
              console.log(this.roles)
              this.edit_user.roles.map((item) => {
                roles.push(item.name);
              });
              this.revokeRoles = res.data.data.filter((item) =>
                roles.includes(item.name)
              );
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchPermission() {
      let permissions = [];
      //Permission
      this.$axios
        .get("user-setting/permission")
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.loading = false;
              this.permissions = res.data.data;
              this.edit_user.permissions.map((item) => {
                permissions.push(item.name);
              });
              this.revokes = res.data.data.filter((item) =>
                permissions.includes(item.name)
              );
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
          if (error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
      this.stepValue = 1;
    },
    closeReset() {
      this.changePasswordDialog = false;
      this.password = "";
      this.password_confirmation = "";
    },
    resetPasswordAction() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
          .put("user-setting/reset-password/" + this.edit_user.id, {
            password: this.password,
            password_confirmation: this.password_confirm,
          })
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.edit_user = {};
                this.reset();
                this.fetchData();
                this.changePasswordDialog = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status === 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },

    OpenModalEdit(item) {
      this.edit_user = item;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
          .put("user-setting/user/" + this.edit_user.id, this.edit_user)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdateModal();
                this.edit_user = {};
                this.reset();
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status === 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    closeUpdateModal() {
      this.$store.commit("modalEdit_State", false);
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      console.log(id)
      this.userID = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("user-setting/user/" + this.userID)
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    //Permission
    openModalRole(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchRole();
      this.roleDialog = true;
    },
    AddRole() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
          .post("user-setting/user/" + this.userID + "/give-role", {
            roles: this.edit_user.roles,
          })
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.selectedRole = "";
                this.fetchData();
                this.reset();
                this.roleDialog = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code === 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
        this.loading = false;
      }
    },
    openModalUpdateRole(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchRole();
      this.updateRoleDialog = true;
    },
    //Update Role
    UpdateRole() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/revoke-role", {
            roles: this.selectedRole,
          })
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.selectedRole = "";
                this.fetchData();
                this.reset();
                this.updateRoleDialog = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code === 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
        this.loading = false;
        this.updateRoleDialog = false;
      }
    },
    // Permission
    openModalPermission(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchPermission();
      this.permissionDialog = true;
    },
    AddPermission() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/give-permission", {
            permissions: this.edit_user.permissions,
          })
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                // this.selectedPermission = "";
                this.fetchData();
                this.reset();
                this.permissionDialog = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code === 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
        this.loading = false;
        this.permissionDialog = false;
      }
    },

    openModalUpdatePermission(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchPermission();
      this.updatePermissionDialog = true;
    },
    //Update Role
    UpdatePermission() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
          .post("user-setting/user/" + this.userID + "/revoke-permission", {
            permissions: this.selectedPermission,
          })
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.reset();
                this.updatePermissionDialog = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code === 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
        this.loading = false;
        this.updatePermissionDialog = false;
      }
    },
    resetPassword(item) {
      this.changePasswordDialog = true;
      this.edit_user = item;
    },
    changeStatus(item) {
      this.changeStatusDialog = true;
      this.edit_user = item;
    },
    // Change phone
    changePhone(id){
      this.$router.push({
        name: "ChangePhone",
        params:{id}
      });
    },
    closeChangePhone(){
      this.changePhoneDialog = false;
      this.stepValue = 1;
    },
    switchStatus() {
      this.loading = true;
      this.$axios
        .put("user-setting/update-status/" + this.edit_user.id, {
          status: this.edit_user.status,
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.loading = false;
              this.fetchData();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.changeStatusDialog = false;
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
        });
    },
    statusColor(value) {
      if (value === "active") return "primary";
      else if (value === "inactive") return "error";
      else return "info";
    },
    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },

    handleOnComplete(value) {
      this.code = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },

  watch: {
    "user.name": function () {
      this.server_errors.name = "";
    },
    "user.phone": function () {
      this.server_errors.phone = "";
    },
    "user.email": function () {
      this.server_errors.email = "";
    },
    "user.password": function () {
      this.server_errors.password = "";
    },
    "edit_user.name": function () {
      this.server_errors.name = "";
    },
    "edit_user.phone": function () {
      this.server_errors.phone = "";
    },
    "edit_user.email": function () {
      this.server_errors.email = "";
    },
    password: function () {
      this.server_errors.password = "";
    },
    password_confirmation: function () {
      this.password_confirmation = "";
    },
    "edit_user.roles": function () {
      this.errormsg = "";
    },
    "edit_user.permissions": function () {
      this.server_errors.permissions = "";
    },
    search: function (value) {
      if (value === "") {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchRole();
    this.fetchData();
    this.initReCaptcha();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.v-stepper__content{
  padding: 8px 8px;
}
.otp,.btnClear{
  margin-bottom: 24px;
  margin-top: 24px;
}

</style>
