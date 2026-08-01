*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Example Domain Should Render
    Open Browser    https://example.com    chrome    options=add_argument("--headless=new");add_argument("--no-sandbox");add_argument("--disable-dev-shm-usage")
    Title Should Be    Example Domain
    Page Should Contain Element    xpath=//h1[contains(.,'Example Domain')]
    [Teardown]    Close Browser
