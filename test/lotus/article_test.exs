defmodule Lotus.ArticleTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_article

  alias Lotus.Article

  test "Creates a Article" do
    html =
      render_surface do
        ~F"""
        <Article>Hello</Article>
        """
      end

    assert html =~ """
           <article class="uk-article">
             Hello
           </article>
           """
  end
end
