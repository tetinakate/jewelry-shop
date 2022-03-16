import React, { useState } from 'react';
import { MainSubscribeWrapperFormStyled, MainSubscribeFormStyled, MainSubscribeInputStyled } from './main-subscribe-form.styles';
import { Button } from '../../../../components/elements/button';

export const MainSubscribeForm = () => {
    const [value, setValue] = useState('');
    const placeholder = 'Ваш e-mail';
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log('form send', value);
    };
    return (
        <MainSubscribeWrapperFormStyled>
            <MainSubscribeFormStyled onSubmit={handleSubmit}>
                <MainSubscribeInputStyled placeholder={placeholder} type="text" value={value} onChange={handleChange} />

                <Button
                    text="отправить"
                    mode="dark"
                    size="sm"
                />
            </MainSubscribeFormStyled>
        </MainSubscribeWrapperFormStyled>
    );
};
