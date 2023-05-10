import { useState } from 'react';
import { UserCardProps } from '../interfaces/userCardProps';

interface FormResult {
  state: UserCardProps;
  handleChangueForm: (key: string, value: string) => void;
}

interface Props {
  initialState: UserCardProps;
}

const useForm = ({ initialState }: Props): FormResult => {
  const [state, setState] = useState(initialState);

  const handleChangueForm = (key: string, value: string) => {
    setState((state) => ({
      ...state,
      [key]: value
    }));
  };

  return {
    state,
    handleChangueForm
  };
};

export default useForm;
