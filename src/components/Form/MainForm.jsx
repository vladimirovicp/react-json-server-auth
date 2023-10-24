import React from "react";
import {Link} from "react-router-dom";

const MainForm = () =>{
    return(
        <div className="content">

            <form action="" className="form">

                <p className="form__email"> sdfsfds@mail.ru</p>

                <h2 className="form__title">Регистрация</h2>
                <h2 className="form__title">Придумай пароль для входа на любом устройстве</h2>
                <input className="form__field" type="text" />
                <button className="form__btn" type="button">Продолжить</button>

                <input className="form__field" type="text" />
                <button className="form__btn" type="submit">Создать аккаунт</button>
                {/* <Link>У меня есть аккаунт</Link> */}
            </form>
        </div>
    );
}

export default MainForm;