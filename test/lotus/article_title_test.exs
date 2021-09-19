defmodule Lotus.ArticleTitleTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_article_title

  alias Lotus.ArticleTitle

  test "Creates a ArticleTitle" do
    html =
      render_surface do
        ~F"""
        <ArticleTitle>Hello</ArticleTitle>
        """
      end

    assert html =~ """
           <h1 class="uk-article-title">
             Hello
           </h1>
           """
  end
end
