import React from 'react';
import { ScaleLoader } from "react-spinners";
import { css } from '@emotion/core'

const override = css`
    display: block;
`;


export const LoaderBounce = () => {

    return (
        <>
            <ScaleLoader
                css={override}
                size={250}
                height={55}
                margin={4}
                color={"#e9ecef"}
            />
        </>
    )
}
