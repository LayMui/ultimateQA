import { Duration, Task } from '@serenity-js/core'
import { AutomationPractice } from '../page-objects/automationPractice'
import { Click } from '@serenity-js/web'

export const NavigateTo = {
  fillFormsLink: () =>
    Task.where(
      `#actor navigate to fill in forms link`,
      Click.on(AutomationPractice.fillOutFormLink()),
    ),
}
