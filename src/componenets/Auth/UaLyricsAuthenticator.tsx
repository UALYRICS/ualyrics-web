import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';

const authScreenLabels = {
    en: {
      'Account recovery requires verified contact information':
      'Відновлення облікового запису потребує контактної інформації',
      'Back to Sign In': 'Назад на сторінку входу',
      'Change Password': 'Змінити пароль',
      Changing: 'Змінюємо',
      Code: 'Код',
      'Confirm Password': 'Підтвердіть пароль',
      'Confirm Sign Up': 'Підтвердіть реєстрацію',
      'Confirm SMS Code': 'Підтвердіть SMS код',
      'Confirm TOTP Code': 'Підтвердіть TOTP код',
      Confirm: 'Підтвердити',
      'Confirmation Code': 'Код підтвердження',
      Confirming: 'Підтверджуємо',
      'Create a new account': 'Зареєструватися',
      'Create Account': 'Зареєструватися',
      'Creating Account': 'Реєструємо',
      'Dismiss alert': 'Відхилити сповіщення',
      Email: 'Email',
      'Enter your code': 'Введіть код',
      'Enter your email': 'Введіть ваш email',
      'Enter your phone number': 'Введіть ваш номер телефону',
      'Enter your username': 'Введіть ваше імʼя користувача',
      'Forgot password?': 'Забули пароль?',
      'Forgot your password?': 'Забули ваш пароль?',
      'Hide password': 'Сховати пароль',
      'It may take a minute to arrive': 'Доставка може тривати хвилину',
      Loading: 'Загружаємо',
      'New password': 'Новий пароль',
      Password: 'Пароль',
      'Phone Number': 'Номер Телефону',
      'Resend Code': 'Відправити код повторно',
      'Reset your password': 'Скинути пароль',
      'Reset your Password': 'Скинути пароль',
      'Send code': 'Відправити код',
      'Send Code': 'Відправити код',
      Sending: 'Відправляємо',
      'Setup TOTP': 'Налаштувати TOTP',
      'Show password': 'Показати пароль',
      'Sign in to your account': 'Увійти у ваш обліковий запис',
      'Sign In with Amazon': 'Увійти з Amazon',
      'Sign In with Apple': 'Увійти з Apple',
      'Sign In with Facebook': 'Увійти з Facebook',
      'Sign In with Google': 'Увійти з Google',
      'Sign in': 'Увійти',
      'Sign In': 'Увійти',
      'Signing in': 'Входимо',
      Skip: 'Пропустити',
      Submit: 'Відправити',
      Submitting: 'Відправляємо',
      Username: 'Імʼя користувача',
      'Verify Contact': 'Підтвердити Контакт',
      Verify: 'Підтвердити',
      'We Emailed You': 'Ми відправили вам Email',
      'We Sent A Code': 'Ми відправили код',
      'We Texted You': 'Ми відправили вам текстове повідомлення',
      'Your code is on the way. To log in, enter the code we emailed to':
        'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам на Email',
      'Your code is on the way. To log in, enter the code we sent you':
        'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми вам відправили',
      'Your code is on the way. To log in, enter the code we texted to':
        'Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам текстовим повідомленням',
    
      // Additional translations
      'An account with the given email already exists.':
        'Обліковий запис з цим Email вже існує.',
      'Confirm a Code': 'Підтвердіть код',
      'Confirm Sign In': 'Підтвердіть вхід',
      'Forgot Password': 'Забули пароль',
      'Incorrect username or password.': 'Невірне імʼя користувача або пароль',
      'Invalid password format': 'Невірний формат паролю',
      'Invalid phone number format': 'Невірний формат номеру телефону',
      'Loading...': 'Загружаємо...',
      'New Password': 'Новий пароль',
      or: 'або',
      'Resend a Code': 'Відправити код повторно',
      'Reset Password': 'Скинути пароль',
      'Sign Out': 'Вийти',
      'Sign Up with Amazon': 'Зареєструватися з Amazon',
      'Sign Up with Apple': 'Зареєструватися з Apple',
      'Sign Up with Facebook': 'Зареєструватися з Facebook',
      'Sign Up with Google': 'Зареєструватися з Google',
      'Sign Up': 'Зареєструватися',
      'User already exists': 'Користувач вже існує',
      'User does not exist': 'Такий користувач не існує',
      'Username cannot be empty': 'Імʼя користувача не може бути пустим',
      'Your passwords must match': 'Паролі мають збігатися',
    }
};

I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);

export const UaLyricsAuthenticator = () => {

  const formFields = {
    signIn: {
      username: {
        placeholder: 'name@company.com',
        isRequired: true,
        label: 'E-mail:'
      },
      password: {
        label: 'Пароль:',
        placeholder: '********',
        isRequired: true,
      },
    },
    signUp: {
      email: {
        label: 'E-mail:',
        placeholder: "name@company.com",
        required: true,
      },
      name: {
        label: "Ім'я * (ним будуть підписані ваші переклади)",
        placeholder: "Петро",
        required: true,
      },
      password: {
        label: 'Пароль:',
        placeholder: '********',
        isRequired: false,
        order: 1,
      },
      confirm_password: {
        label: 'Повторіть пароль:',
        placeholder: '********',
        order: 2,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: '********',
      },
    },
    resetPassword: {
      username: {
        placeholder: 'name@company.com',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Уведіть код підтвердження:',
        label: 'Код',
        isRequired: true,
      },
      password: {
        label: 'Новий пароль',
        placeholder: '********',
        isRequired: true,
      },
      confirm_password: {
        placeholder: '********',
        isRequired: true,
      },
    },
    setupTOTP: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: 'Код',
        placeholder: 'Уведіть код підтвердження:',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: 'Код',
        placeholder: 'Уведіть код підтвердження:',
        isRequired: false,
      },
    },
  };

  return (
    <Authenticator formFields={formFields} socialProviders={['facebook', 'google']} />
  );
}