import { useFormStatus } from 'react-dom';
import { Button } from '@mantine/core'
import data from '@/data/data.json';

type Props = {
  text: string
}

export default function SubmitBtn({ text }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      size="md"
      radius="xs"
      type="submit"
      variant="filled"
      aria-disabled={pending}
      disabled={pending}
      loading={pending}
      fullWidth
      bg={data.colors.primary}
    >
      {text}
    </Button>
  )
}
