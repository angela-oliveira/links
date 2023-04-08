import { Data } from "@/lib/data"
import { Flex, Link, Text } from "@chakra-ui/react"
import DynamicIcon from "./DynamicIcon"

export function ListLinks() {
    const {links} = Data
    return (
        <Flex justifyContent={'center'} mt={4} mb={8}>
            <Flex flexDir={'column'} gap={4}>
                {links.map((e, i) => 
                    <Link key={i} href={e.url} isExternal>
                        <Flex 
                            justifyContent={'space-between'}
                            py={4}
                            px={8}
                            gap={6}
                            alignItems={'center'}
                            transition={'all'}
                            rounded={'lg'}
                            bgColor={'#F1F5FB'}
                            borderRadius={'24px'}
                            boxShadow={'-10px -10px 20px rgba(255, 255, 255, 0.5), 10px 10px 20px #E5E5E5'}
                            _hover={{
                                background: 'rgba(215, 219, 224, 0.2)',
                                // opacity: '0.2'  
                            }}
                            w={'334px'}
                        >
                            <Text color={'blackColor.10'}>{e.label}</Text>
                            
                            <Flex h='32px' w='32px' alignItems="center">
                                <DynamicIcon icon={'link'} />
                            </Flex>
                        </Flex>
                    </Link>
                )}

            </Flex>
        </Flex>
    )
}