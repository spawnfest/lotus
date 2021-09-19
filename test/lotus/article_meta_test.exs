defmodule Lotus.ArticleMetaTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_article_meta

  alias Lotus.ArticleMeta

  test "Creates a ArticleMeta" do
    html =
      render_surface do
        ~F"""
        <ArticleMeta>Hello</ArticleMeta>
        """
      end

    assert html =~ """
           <p class="uk-article-meta">
             Hello
           </p>
           """
  end
end
