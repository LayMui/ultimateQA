import { Duration, Task } from '@serenity-js/core';
import { AutomationPractice } from '../page-objects/automationPractice';
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'

export const FillOut = {
  forms: (captcha: string) =>
    Task.where(
      `#actor fill out forms`,
      Wait.upTo(Duration.ofMilliseconds(500000)).until(
        AutomationPractice.firstSubmitButton(),
        isVisible()
      ),
      Enter.theValue('laymui').into(AutomationPractice.firstNameField()),
      Enter.theValue('working on qa automation').into(
        AutomationPractice.firstMessageField()
      ),
      Click.on(AutomationPractice.firstSubmitButton()),
      Enter.theValue('toh').into(AutomationPractice.secondNameField()),
      Enter.theValue('working on qa automation').into(
        AutomationPractice.secondMessageField()
      ),
      Enter.theValue(captcha).into(AutomationPractice.captchaField()),
      Click.on(AutomationPractice.secondSubmitButton())
    ),
}
