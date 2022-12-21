// import PropTypes from 'prop-types';
import _ from './Form.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const Form = () => {
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsPending(true);
  };

  return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
        <label htmlFor='email' className={_.label}>Email</label>
        <input
          {...register('email', {
            required: {
              value: true,
              message: `Email shouldn't be empty`,
            },
            pattern: {
              value: /^.+@.+\..+$/,
              message: 'Invalid mail format',
            }
          })}
          className={_.input}
          id='email'
          type='text'
          aria-invalid={!!errors.email}
          disabled={isPending}
        />
        {errors.email &&
          <p className={_.error}>{errors.email.message}</p>
        }
      </div>

      <div className={_.wrap}>
        <label htmlFor='password' className={_.label}>Password</label>
        <input
          {...register('password', {
            required: {
              value: true,
              message: 'Provide a password'
            },
            minLength: {
              message: 'Password too short!',
              value: 6,
            },
            validate: {
              needLowerCased: v => /[a-z]+/.test(v) ||
                'Add some lowercased chars!',
              needCaps: v => /[A-Z]+/.test(v) ||
                'Add a few caps chars!!',
              needDigits: v => /[\d]+/.test(v) ||
                'Now put some digits!',
              needNonChars: v => /[^\w\s]+/.test(v) ||
                'Where are non-characters?!',
            },
          })}
          className={_.input}
          id='password'
          type='password'
          disabled={isPending}
          aria-invalid={!!errors.password} />
        {errors.password &&
          <p className={_.error}>{errors.password.message}</p> }
      </div>

      <div className={_.wrapCheckbox}>
        <input
          {...register('save')}
          className={_.checkbox}
          id='save'
          disabled={isPending}
          type='checkbox' />
        <label htmlFor='save' className={_.labelCheckbox}>
          Keep password
        </label>
      </div>
      <button className={_.submit} type='submit'
        disabled={isPending}>Enter</button>
      {isPending && <p>Please wait for server response...</p>}

    </form>
  );
};

Form.propTypes = {

};
