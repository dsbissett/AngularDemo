module thing {
    class Shit {
        firstName: string;
        lastName: string;
        city: string;
        state: string;
        phoneNumber: string;
        email: string;

        constructor() {
            this.firstName = '';
            this.lastName = '';
            this.city = '';
            this.state = '';
            this.phoneNumber = '';
            this.email = '';
        }

        get(): any {
            return 'shit';
        }
    }
}