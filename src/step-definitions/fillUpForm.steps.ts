import { Given, Then, When } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Navigate,Text } from '@serenity-js/web'
import { AutomationPractice } from "../page-objects/AutomationPractice";
import { FillOut } from "../tasks/FillOut";

import {
  Ensure,
  equals,
  
} from '@serenity-js/assertions'

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

When(
  '{pronoun} fill up the two forms',
  async (actor: Actor) => {
    const captcha =  Text.of(AutomationPractice.captchaQuestion()).answeredBy(actor)
    console.log('Captcha: ' + captcha)
    await actor.attemptsTo(
      FillOut.forms(),
      Ensure.that(Text.of(AutomationPractice.captchaQuestion()), equals('13 + 10'))
    )
  }
)

Then(
  '{pronoun} should able to submit the forms successfully',
  async (actor: Actor) => {}
)