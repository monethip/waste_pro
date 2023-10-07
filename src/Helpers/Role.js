export default (roleArray, allrequired = false) => {
  let canEnter = false;

  // const userPermissions = store.getters['User/getUserType'];
  const user_role = window.localStorage.getItem('user');
  const getRoles = JSON.parse(user_role);
  if (!getRoles.roles) return false;
  const allRoles = getRoles.roles.map((i) => i.name);
  const roleUsers = JSON.parse(JSON.stringify(allRoles));
  const roles = JSON.parse(JSON.stringify(roleArray));
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
