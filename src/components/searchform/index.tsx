const SearchForm = () => {
    return (
        <aside
          id="ac-gn-searchview"
          className="ac-gn-searchview"
        >
          <div className="ac-gn-searchview-content">
            <div className="ac-gn-searchview-bar">
              <div className="ac-gn-searchview-bar-wrapper">
                <form
                  id="ac-gn-searchform"
                  className="ac-gn-searchform"
                  action=""
                  method="get"
                >
                  <div className="ac-gn-searchform-wrapper">
                    <input
                      id="ac-gn-searchform-input"
                      className="ac-gn-searchform-input"
                      type="text"
                      placeholder="Search apple.com"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                      spellCheck="false"
                    />
                    <input
                      id="ac-gn-searchform-src"
                      type="hidden"
                      name="src"
                      value="globalnav"
                    />
                    <button
                      id="ac-gn-searchform-submit"
                      className="ac-gn-searchform-submit"
                      type="submit"
                      disabled
                    >
                      {" "}
                    </button>
                    <button
                      id="ac-gn-searchform-reset"
                      className="ac-gn-searchform-reset"
                      type="reset"
                      disabled
                    >
                      <span className="ac-gn-searchform-reset-background"></span>
                    </button>
                  </div>
                </form>
                <button
                  id="ac-gn-searchview-close-small"
                  className="ac-gn-searchview-close ac-gn-searchview-close-small"
                >
                  <span
                    className="ac-gn-searchview-close-cancel"
                  >
                    Cancel
                  </span>
                </button>
              </div>
            </div>
            <aside
              id="ac-gn-searchresults"
              className="ac-gn-searchresults"
            ></aside>
          </div>
          <button
            id="ac-gn-searchview-close"
            className="ac-gn-searchview-close"
          >
            <span className="ac-gn-searchview-close-wrapper">
              <span className="ac-gn-searchview-close-left"></span>
              <span className="ac-gn-searchview-close-right"></span>
            </span>
          </button>
        </aside>
    )
}

export default SearchForm;