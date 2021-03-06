import { AmplifyAuthenticator, AmplifyConfirmSignUp, AmplifySignIn, AmplifySignUp } from "@aws-amplify/ui-react";
import { I18n } from 'aws-amplify';

const authScreenLabels = {
    en: {
        'Forgot your password?': 'Забули пароль?',
        'Reset password': 'Скинути пароль',
        'Create account': 'Зареєструватися',
        'No account?': 'Не зареєстровані?',
        'Have an account?': 'Зареєстровані?',
        'Sign in':'Увійти',
        'Back to Sign In':'Назад на сторінку входу',
        'Sign in with AWS':'Увійти з Facebook або Google'
    }
};

I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);

export const UaLyricsAuthenticator = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignIn
          usernameAlias="email"
          headerText="Вітаємо"
          slot="sign-in"
          formFields={[
            {
              type: "email",
              label: "E-mail",
              placeholder: "name@company.com",
              required: true,
            },
            {
              type: "password",
              label: "Пароль",
              placeholder: "********",
              required: true,
            }
          ]}
          submitButtonText="Увійти"
        >
        </AmplifySignIn>
      <AmplifySignUp
        usernameAlias="email"
        slot="sign-up"
        headerText="Реєстрація"
        submitButtonText="Створити профіль"
        formFields={[
          {
            type: "email",
            label: "E-mail *",
            placeholder: "name@company.com",
            required: true,
          },
          {
            type: "name",
            label: "Ім'я * (ним будуть підписані ваші переклади)",
            placeholder: "Петро",
            required: true,
          },
          {
            type: "password",
            label: "Пароль *",
            placeholder: "********",
            required: true,
          }
        ]} 
      />
      <AmplifyConfirmSignUp
          usernameAlias="email"
          headerText="Уведіть код підтвердження (висланий на e-mail)"
          submitButtonText="Завершити реєстрацію"
          slot="confirm-sign-up"
          formFields={[
            {
              type: "email",
              label: "E-mail",
              placeholder: "name@company.com",
              required: true,
            },
            {
              type: "code",
              label: "Код",
              placeholder: "123456",
              required: true,
            }
          ]}
          >
      </AmplifyConfirmSignUp>
    </AmplifyAuthenticator>
  );
}