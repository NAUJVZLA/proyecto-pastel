import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import SliderPrice from "../../slider/range-price";
import Login from "@/components/func/login/loginFuntion";



export default function LoginModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Button onPress={onOpen}>Login</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-2">LOGIN  </ModalHeader>
                            <ModalBody>
                                <Login />
                                <SliderPrice />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
