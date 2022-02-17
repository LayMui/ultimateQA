import { By, PageElements, PageElement } from '@serenity-js/web'

export const AutomationPractice = {
  fillOutFormLink: () =>
    PageElement.located(By.xpath("//a[normalize-space()='Fill out forms']")),

  firstNameField: () => 
    PageElement.located(By.id('et_pb_contact_name_0')),

  firstMessageField: () =>
    PageElement.located(By.id('et_pb_contact_message_0')),

  firstSubmitButton: () =>
    PageElement.located(By.css('name[et_builder_submit_button]')),

  captchaField: () =>
    PageElement.located(By.css('name[et_pb_contact_captcha_1]')),

  secondNameField: () => PageElement.located(By.id(' et_pb_contact_name_1')),

  secondMessageField: () =>
    PageElement.located(By.id('et_pb_contact_message_1')),
}
