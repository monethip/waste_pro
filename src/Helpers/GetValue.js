export const GetOldValueOnInput = (context) => {
    if (context.search !== '') {
        if (context.oldVal !== '') {
            if (context.oldVal !== context.search) {
                context.oldVal = context.search;
                context.pagination.current_page = 1;
                context.fetchData();
            }
        } else {
            if (context.search !== '') {
                context.pagination.current_page = 1;
                context.fetchData();
            }
            context.oldVal = context.search;
        }
    } else {
        context.oldVal = '';
    }
}
