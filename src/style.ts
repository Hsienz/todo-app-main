import tw, { styled } from "twin.macro";
import { IThemeProp } from "./type";
export const Wrapper = styled.div`
	${tw`
        font-sans
        text-lg
        justify-center
        items-center
    `}
`;

export const Background = styled.div<IThemeProp>`
	${tw`
        top-0
        left-0
        absolute
        w-screen
        min-h-screen
        -z-10
        after:bg-no-repeat
        after:bg-cover
        after:content-['']
        after:absolute
        after:block
        after:w-screen
        after:h-2/5
        after:top-0
        after:left-0
    `}
	${(p) =>
		p.$dark
			? tw`
        bg-Very_Dark_Blue
        after:bg-[url('/src/assets/images/bg-mobile-dark.jpg')]
    `
			: tw`
        bg-Very_Light_Gray
        after:bg-[url('/src/assets/images/bg-mobile-light.jpg')]
    `}
`;

export const Row = styled.div`
	${tw`
        flex
    `}
`;

export const Col = styled.div`
	${tw`
        flex
        flex-col
    `}
`;
