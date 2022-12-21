// import PropTypes from 'prop-types';
import _ from './Form.module.css';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
              message: `Pass isn't strong enough!`,
            }
          })}
          className={_.input}
          id='password'
          type='password'
          aria-invalid={!!errors.password} />
        {errors.password &&
          <p className={_.error}>{errors.password.message}</p>
        }
      </div>

      <div className={_.wrapCheckbox}>
        <input
          {...register('save')}
          className={_.checkbox}
          id='save'
          type='checkbox' />
        <label htmlFor='save' className={_.labelCheckbox}>
          Keep password
        </label>
      </div>
      <button className={_.submit} type='submit'>Enter</button>
    </form>
  );
};

Form.propTypes = {

};
