import React, { useState } from "react";
import {Link} from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
const MainForm = () =>{

    const [status, setStatus] = useState(false);

    return(
        <div className="content">

            <form action="" className="form">

                {
                    status && <p className="form__email"> sdfsfds@mail.ru <FaPencilAlt /></p>
                }

                <h2 className="form__title">
                    {
                        status ? 'Придумай пароль для входа на любом устройстве' : 'Регистрация'
                    }
                </h2>
                {
                        status ? <>
                        <input className="form__field" type="text" placeholder="Придумайте пароль" /> 
                        <button className="form__btn" type="submit">Создать аккаунт</button>
                        </>
                        : <>
                        <input className="form__field" type="text" placeholder="Введите email" />
                        <button onClick={() => setStatus(true)} className="form__btn" type="button">Продолжить</button>
                        <p>У меня есть аккаунт</p>
                         {/* <Link to='#'>У меня есть аккаунт</Link> */}
                        </>
                }
            </form>
        </div>
    );
}

export default MainForm;