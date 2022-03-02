import { By, PageElements, PageElement, Text } from '@serenity-js/web'
import { includes } from '@serenity-js/assertions'


export const AutomationPractice = {
  fillOutFormLink: () =>
    PageElement.located(By.xpath("//a[normalize-space()='Fill out forms']")),

  firstNameField: () =>
    PageElement.located(By.xpath("//input[@id='et_pb_contact_name_0']")),

  firstMessageField: () =>
    PageElement.located(By.xpath("//textarea[@id='et_pb_contact_message_0']")),

  firstSubmitButton: () =>
    PageElement.located(
      By.xpath(
        "//div[@id='et_pb_contact_form_0']//button[@name='et_builder_submit_button'][normalize-space()='Submit']"
      )
    ),

  captchaField: () =>
    PageElement.located(By.xpath("//input[@name='et_pb_contact_captcha_1']")),

  secondNameField: () =>
    PageElement.located(By.xpath("//input[@id='et_pb_contact_name_1']")),

  secondMessageField: () =>
    PageElement.located(By.xpath("//textarea[@id='et_pb_contact_message_1']")),

  secondSubmitButton: () =>
    PageElement.located(
      By.xpath(
        "//div[@id='et_pb_contact_form_1']//button[@name='et_builder_submit_button'][normalize-space()='Submit']"
      )
    ),

  captchaQuestion: () =>
    PageElement.located(
      By.xpath("//span[@class='et_pb_contact_captcha_question']")
    ),

  contactForm0: () => PageElement.located(By.id('et_pb_contact_form_0')),

  contactForm2: () => PageElement.located(By.id('et_pb_contact_form_1')),

  successNotification: (message: string) =>
    PageElements.located(By.id('et_pb_contact_form_1'))
      .describedAs('success notification')
      .where(Text, includes(message))
      .first(),
}
