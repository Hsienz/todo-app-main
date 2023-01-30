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
        px-4
        flex
        gap-4
        py-3
    `}

	${(p) =>
		p.$dark
			? tw`
        bg-Very_Dark_Desaturated_Blue
        text-Very_Light_Gray

    `
			: tw`
        bg-Very_Light_Gray    
        text-Very_Dark_Grayish_Blue
    `}
`;

export const TodoInputWrapper = styled.textarea<IThemeProp>`
	${tw`
        w-full
        bg-transparent
        outline-none
        align-middle
        resize-none
        overflow-auto
        
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
        h-7
        aspect-square
        border-2
        border-Very_Light_Grayish_Blue
        rounded-full
    `}
`;

export const TodoRecordWrapper = styled(TodoBackground)`
	${tw`
            flex-col
            px-0
            py-2
            gap-0
        `}
`;
