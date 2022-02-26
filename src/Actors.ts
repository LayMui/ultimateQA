import { Actor, Cast, TakeNotes } from '@serenity-js/core'
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
     console.log(`>> Preparing actor: ${actor.name}`)
    return actor.whoCan(
      BrowseTheWebWithWebdriverIO.using(browser),
      TakeNotes.usingAnEmptyNotepad()
    )
  }
}
