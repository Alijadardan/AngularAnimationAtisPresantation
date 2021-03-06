export interface Article {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  body:string;
  url: string;
}

export const ARTICLE_MOCK: Article[] = new Array(3)
  .fill({})
  .map(
    (c: Article, i: number) =>
      ({
        id: i,
        title: `Lorem ipsum.`,
        url:`assets/tree.jpg`,
        subtitle: `More lorem ipsum bacon ipsum.`,
        description: `Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.`,
        body:`Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.
        Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.
        Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.`
      } as Article),
  )
