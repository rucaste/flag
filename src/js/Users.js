
function Users() {

    this.users = new Map();

    this.getUser = function (email) {
        return this.users.get(email)
    }

}
