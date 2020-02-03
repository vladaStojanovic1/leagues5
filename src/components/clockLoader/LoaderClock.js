import React from 'react'
import { ClockLoader } from "react-spinners";
import { css } from '@emotion/core'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


export const LoaderClock = () => {
    return (
        <>
            <ClockLoader
                css={override}
                size={100}
                color={"#e9ecef"}
            />
        </>
    )
}
