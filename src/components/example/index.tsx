import React from 'react';

interface Props {
    title: string
}

export const Myfunc: React.FC<Props> = ({ title }) => {
    return (
        <div>
            hello! {title}
        </div>
    )
}