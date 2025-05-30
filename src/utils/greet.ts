import { getPublishDate } from '@finsweet/ts-utils';

/**
 * Greets the user by printing a message in the console.
 * @param name The user's name.
 */
export const greetUser = (name: string) => {
  const publishDate = getPublishDate();

  // eslint-disable-next-line no-console
  console.log(`Hello ${name}!`);
  // eslint-disable-next-line no-console
  console.log(
    `This site was last published on ${publishDate?.toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }
    )}.`
  );
};
