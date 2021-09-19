defmodule Lotus.Catalogue.Article.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Article,
    catalogue: Lotus.Catalogue,
    title: "Article",
    height: "400px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  alias Lotus.{ArticleTitle, ArticleMeta, Block}

  def render(assigns) do
    ~F"""
    <Article>
      <ArticleTitle>Hello Lotus</ArticleTitle>
      <ArticleMeta>SurfaceUI based UI framework</ArticleMeta>
      <Block>
        This is a test article that will be replaced with the real thing real soon!
      </Block>
      <Block margin="default">
        Thank you for being here.
      </Block>
    </Article>
    """
  end
end
