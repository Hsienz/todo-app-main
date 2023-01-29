import tw, { styled } from "twin.macro";
import { IThemeProp } from "../../type";

export const Wrapper = styled.div`
	${tw`
        m-6
    `}
`;

export const ThemeButton = styled.button`
	${tw`
        aspect-square
        h-7
    `}
`;

export const ThemeImg = styled.img`
	${tw`
        h-full
        w-full
    `}
`;

export const LogoText = styled.h1`
	${tw`
        text-3xl
        tracking-[0.8rem]
        font-bold
        text-Very_Light_Gray
    `}
`;

export const TodoBackground = styled.div<IThemeProp>`
	${tw`
        rounded-lg
    `}

	${(p) =>
		p.$dark
			? tw`
        bg-Very_Dark_Desaturated_Blue

    `
			: tw`
        bg-Very_Light_Gray    
    `}
`;




export const TodoInputWrapper = styled.input<IThemeProp>`
	${tw`
        w-full
        h-12
        bg-transparent
        outline-none
        align-middle
        pt-1
    `}
	${(p) =>
		p.$dark
			? tw`
            text-Very_Light_Gray
        `
			: tw`
            text-Very_Dark_Grayish_Blue
        `}
`;



export const Circle = styled.button`
    ${tw`
        h-5
        aspect-square
        border-2
        border-Dark_Grayish_Blue
        rounded-full
        mx-4
    `}
`