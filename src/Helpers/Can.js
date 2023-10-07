export default (roles, allrequired = false) => {
  let canEnter = false;

  // const userPermissions = store.getters['User/getUserType'];
  const user_role = window.localStorage.getItem('user');
  const getRoles = JSON.parse(user_role);
  if (!getRoles.role_permissions) return false;
  const role_permissions = getRoles.role_permissions.map((i) => i.name);
  const permissions = getRoles.permissions.map((i) => i.name);
  // Merge array
  let roleUsers = role_permissions.concat(permissions);
  roleUsers = [...new Set([...role_permissions, ...permissions])];

  // ກວດສອບກໍລະນີ userPermission || Permission ບໍ່ມີ Permission ລະບົບຈະ (Return False)...
  if (!roleUsers || !roles) {
    return canEnter;
  }

  // ກວດສອບຖ້າຫາກ Permission ທີ່ສົ່ງມາບໍ່ເເມ່ນ ລະບົບຈັ່ງເຮັດວຽກ Function ນີ້
  if (!Array.isArray(roles)) {
    canEnter = roleUsers.includes(roles);
  } else {
    // Permission ຕ້ອງຖືກຕ້ອງທັງໝົດຈັ່ງເຮັດວຽກ Function ນີ້
    if (allrequired) canEnter = roles.every((role) => roleUsers.includes(role));

    // Permission ຖືກຕ້ອງອັນໃດອັນໜ່ິງກະເຮັດວຽກ Function ນີ້
    else canEnter = roleUsers.filter((role) => roles.includes(role)).length;
  }

  // ກໍລະນີ Permission ບໍ່ຖືກຕ້ອງອັນໃດເລີຍລະບົບຈະ (Return True) ອອກໄປ
  return canEnter;
};
