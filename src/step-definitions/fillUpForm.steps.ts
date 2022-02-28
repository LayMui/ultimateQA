import { Given, Then, When } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Navigate,Text } from '@serenity-js/web'
import { AutomationPractice } from "../page-objects/AutomationPractice";
import { FillOut } from "../tasks/FillOut";
import { isVisible, Wait } from '@serenity-js/web'
import { Duration } from '@serenity-js/core';
import {
  Ensure,
  equals,
  
} from '@serenity-js/assertions'
import { NavigateTo } from "../tasks/NavigateTo";

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given(
  '{actor} is at the ultimate automation exercises site',
  async (actor: Actor) => {
  //  console.log((actor as any).abilities)
    await actor.attemptsTo(Navigate.to(process.env.ULTIMATEQA_BASE_URL))
  }
)

When('{pronoun} want to fill up forms', async (actor: Actor) => {
  await actor.attemptsTo(
    NavigateTo.fillFormsLink(),
    )  
})

When(
  '{pronoun} fill up the two forms',
  async (actor: Actor) => {
      Wait.upTo(Duration.ofMilliseconds(500000)).until(
        AutomationPractice.captchaQuestion(),
        isVisible()
      )
    const captcha = await Text.of(
      AutomationPractice.captchaQuestion()
    ).answeredBy(actor)
      console.log('Captcha: ' + captcha)
    const total = Number(captcha.split('+')[0]) + Number(captcha.split('+')[1])
    console.log('Total: ' + total)
    await actor.attemptsTo(
      FillOut.forms(total.toString()),
    )
  }
)

Then(
  '{pronoun} should able to submit the forms successfully',
  async (actor: Actor) => {}
)