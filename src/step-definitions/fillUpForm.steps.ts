import { Given, Then, When } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Navigate, TakeScreenshot } from '@serenity-js/web'
import { FillOut } from "../tasks/FillOut";

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
      
    await actor.attemptsTo(
      TakeScreenshot.of('before fill out form'),
      FillOut.forms(),
      TakeScreenshot.of('after fill out form')
    )
  }
)

Then(
  '{pronoun} should able to submit the forms successfully',
  async (actor: Actor) => {}
)