import { Duration, Task } from '@serenity-js/core'
import { AutomationPractice } from '../page-objects/automationPractice'
import { isVisible, Wait } from '@serenity-js/web'

export const VerifySubmission = {
  isSentSuccessfully: () =>
    Task.where(
      `#actor verify submission of form`,
      Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        AutomationPractice.successNotification('Thank you for contacting us'),
        isVisible()
      )
    ),
    
}
