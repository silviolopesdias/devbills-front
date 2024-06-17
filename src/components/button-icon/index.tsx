import { ComponentProps, forwardRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./styles";



type ButtonIconProps = ComponentProps<'button'> 


export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(function ({ ...props },
     ref,
    ) {
    return (
    <Container {...props} ref= {ref} >
      <MagnifyingGlass />
        </Container>
        )
});