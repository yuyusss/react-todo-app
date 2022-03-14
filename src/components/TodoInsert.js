import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    // 빈 배열 : 컴포넌트가 렌더링 될 때마다 기존 함수 계속해서 재사용
    // 기존의 값 조회하지 않고 바로 설정하는 경우  

    const onSubmit = useCallback(
        e => {
            onInsert(value); // 입력된 value 값을 파라미터로 전달
            setValue(''); // 입력란 비우기

            // 새로고침 방지
            e.preventDefault()
        }, [onInsert, value]
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange} />
            <button type="submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;