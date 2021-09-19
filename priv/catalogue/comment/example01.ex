defmodule Lotus.Catalogue.Comment.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Comment,
    catalogue: Lotus.Catalogue,
    title: "Comment",
    height: "500px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  alias Lotus.{Block, CommentHeader, CommentAvatar, CommentBody, CommentMeta, CommentTitle, Page}

  def render(assigns) do
    ~F"""
    <Comment>
      <CommentHeader>
      <Block grid grid_size="medium">
          <Block width="auto">
              <CommentAvatar src="https://via.placeholder.com/80" />
          </Block>
          <Block width="expand">
              <CommentTitle class="uk-margin-remove">
                <a class="uk-link-reset" href="#">Author</a>
              </CommentTitle>
              <CommentMeta subnav class="uk-subnav-divider uk-margin-remove-top">
                  <Page><a href="#">12 days ago</a></Page>
                  <Page><a href="#">Reply</a></Page>
              </CommentMeta>
          </Block>
      </Block>
      </CommentHeader>
      <CommentBody>
        <Block>
          HELLO COMMENT
        </Block>
      </CommentBody>
    </Comment>
    """
  end
end
