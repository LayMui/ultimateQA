import { Duration, Task } from '@serenity-js/core';
import { AutomationPractice } from '../page-objects/automationPractice';
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'

export const FillOut = {
  forms: (firstName: string, firstMessage: string, secondName: string, secondMessage: string, captcha: string) =>
    Task.where(
      `#actor fill out forms`,
      Wait.upTo(Duration.ofMilliseconds(500000)).until(
        AutomationPractice.firstSubmitButton(),
        isVisible()
      ),
      Enter.theValue(firstName).into(AutomationPractice.firstNameField()),
      Enter.theValue(firstMessage).into(
        AutomationPractice.firstMessageField()
      ),
      Click.on(AutomationPractice.firstSubmitButton()),
      Enter.theValue(secondName).into(AutomationPractice.secondNameField()),
      Enter.theValue(secondMessage).into(
        AutomationPractice.secondMessageField()
      ),
      Enter.theValue(captcha).into(AutomationPractice.captchaField()),
      Click.on(AutomationPractice.secondSubmitButton())
    ),
}
