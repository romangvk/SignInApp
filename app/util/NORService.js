export const GetForm = (user, pass, id) => {
    return new Promise((resolve, reject) => {
        fetch('https://northstar-test.biiweb.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        }).then(() => {
            fetch('https://northstar-test.biiweb.com/api/forms/' + id).then((response) => {
                response.json().then((data) => {
                    console.log(data)
                    var form = data.data.form;
                    resolve(form);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
};
export const SubmitForm = (user, pass, data) => {
    return new Promise((resolve, reject) => {
        fetch('https://northstar-test.biiweb.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        }).then(() => {
            fetch('https://northstar-test.biiweb.com/api/submissions', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((response) => {
                response.json().then((jsdata) => {
                    resolve(jsdata);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
}
class Submission {
    constructor(form) {
        this.form = form;
        this.form.formVersionId = form.id;
        this.form.id = data.data.form.id;
    }
}