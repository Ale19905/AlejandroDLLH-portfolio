'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Divider, Modal, Textarea, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTelegram } from '@tabler/icons-react';
import { sendToTelegram } from '@/lib/actions';
import { ContactFormState } from '@/lib/definitions';
import SubmitBtn from './submit-btn';
import data from '@/data/data.json';

const INITIAL_STATE = {
  data: null,
};

function ContactForm() {
  const { modal } = data.contacts;

  const [formState, formAction] = useFormState<ContactFormState, FormData>(
    sendToTelegram,
    INITIAL_STATE
  );

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (formState.message === 'Message sent!') open();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  return (
    <div>
      <Modal opened={opened} onClose={close} title={modal.title} centered>
        <div className='flex flex-col items-center gap-5'>
          <IconBrandTelegram stroke={1} size={50} color={data.colors.white} />

          <p className='text-pretty text-lg font-normal text-center mx-5'>
            {modal.text}
          </p>
        </div>
      </Modal>

      <form
        action={formAction}
        className='w-[320px] xl:w-[500px] flex flex-col gap-8 pb-10'
      >
        <section>
          <TextInput
            variant='unstyled'
            name='name'
            label="NAME"
            placeholder="John Doe"
            withAsterisk
            error={formState?.zodErrors?.name}
            size='md'
          />

          <Divider w="100%" my="sm" color={data.colors.secondary} />
        </section>

        <section>
          <TextInput
            variant='unstyled'
            name='email'
            label="EMAIL"
            placeholder="example@email.com"
            withAsterisk
            error={formState?.zodErrors?.email}
            size='md'
          />

          <Divider w="100%" my="sm" color={data.colors.secondary} />
        </section>

        <section>
          <Textarea
            variant='unstyled'
            name='message'
            label="MESSAGE"
            placeholder="Hello..."
            withAsterisk
            autosize
            minRows={2}
            maxRows={4}
            error={formState?.zodErrors?.message}
            size='md'
          />

          <Divider w="100%" my="sm" color={data.colors.secondary} />
        </section>

        <div className='pt-3'>
          <SubmitBtn text='Send' />

          {formState.error ? (
            <div className="text-pink-500 text-md italic py-2 text-center">
              An error occurred try later
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
