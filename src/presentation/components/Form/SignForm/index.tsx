/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  FormErrorMessage,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface SignFormProps {
  onSubmit: () => void;
  errors: any;
  register: any;
  text?: string;
  path?: string;
}

export const SignForm = ({
  onSubmit,
  errors,
  register,
  text,
  path,
}: SignFormProps) => {
  return (
    <Box
      bg={'white'}
      p={20}
      width={600}
      borderRadius={6}
      boxShadow={'sm'}
    >
      <Stack gap={4}>
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Heading>Login Form</Heading>
          <form style={{ width: 350 }}>
            <FormControl
              isInvalid={!!errors?.email?.message}
              errortext={errors?.email?.message}
              p="4"
              isRequired
            >
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                {...register('email')}
              />
              <FormErrorMessage>
                {errors?.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!errors?.password?.message}
              errortext={errors?.password?.message}
              px="4"
              pb="4"
              isRequired
            >
              <FormLabel>Password</FormLabel>
              <Input
                {...register('password')}
                placeholder="password"
              />
              <FormErrorMessage>
                {errors?.password?.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              onClick={onSubmit}
              p="4"
              mx="4"
              mt="6"
              w="90%"
              colorScheme="blue"
              variant="solid"
            >
              Login
            </Button>
          </form>
          <Box mt={10}>
            <Link to={path}>
              <Text>{text}</Text>
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
