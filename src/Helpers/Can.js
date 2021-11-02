
export default (roles, allrequired = false) => {
    let canEnter = false;

    //const userPermissions = store.getters['User/getUserType'];
    const user_role = window.localStorage.getItem('RoleUser');
    const roleUsers = JSON.parse(user_role);

    // ກວດສອບກໍລະນີ userPermission || Permission ບໍ່ມີ Permission ລະບົບຈະ (Return False)...
    if (!roleUsers || !roles) {
        return canEnter;
    }

    // ກວດສອບຖ້າຫາກ Permission ທີ່ສົ່ງມາບໍ່ເເມ່ນ ລະບົບຈັ່ງເຮັດວຽກ Function ນີ້
    if (!Array.isArray(roles)) {
        canEnter = roleUsers.includes(roles);
    }
    else {
        // Permission ຕ້ອງຖືກຕ້ອງທັງໝົດຈັ່ງເຮັດວຽກ Function ນີ້
        if (allrequired) {
            canEnter = roles.every(role => roleUsers.includes(role));
        }
        // Permission ຖືກຕ້ອງອັນໃດອັນໜ່ິງກະເຮັດວຽກ Function ນີ້
        else {
            canEnter = roleUsers.filter(role => {
                return roles.includes(role);
            }).length > 0;
        }
    }

   // ກໍລະນີ Permission ບໍ່ຖືກຕ້ອງອັນໃດເລີຍລະບົບຈະ (Return True) ອອກໄປ
    return canEnter;
}
