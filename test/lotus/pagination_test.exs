defmodule Lotus.PaginationTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_pagination

  alias Lotus.Pagination

  test "Creates a Pagination" do
    html =
      render_surface do
        ~F"""
        <Pagination>
          PAGINATION
        </Pagination>
        """
      end

    assert html =~ """
           <ul class="uk-pagination">
             PAGINATION
           </ul>
           """
  end
end
