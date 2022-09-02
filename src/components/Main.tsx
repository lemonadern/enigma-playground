import { Button } from "@chakra-ui/react"
import { greet } from "../../wasm/pkg/wasm"

export const Main = () => {
    return(
        <div>
            <Button onClick={() => greet()}>Greet</Button>
        </div>
    )
}