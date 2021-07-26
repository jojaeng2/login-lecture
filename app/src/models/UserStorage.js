"use strict";

class UserStorage {
    // 클래스 자체의 변수에 접근하기 위해서 static으로 설정
    // #는 users라는 내부데이터에 접근하는 것을 비공개로 만들기위해 사용 -> 은닉화
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;