# Welcome to Open-Set-Go contributing guide

Thank you for investing your time in contributing to our Open-Set-Go project! Any contribution you make will be reflected on [Open-Set-Go.io](https://open-set-go.netlify.app/) & [README.md](https://github.com/AgainIoT/Open-Set-Go#contributors) ✨.

We are committed to fostering a contribution-friendly environment that encourages contributions and aims to evolve into an open-source community. Please have a lot of conversations on [our Discussion](https://github.com/AgainIoT/Open-Set-Go/discussions)!

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.
<br><br>

## Ways to contribute

### Contributors

There are several ways you can contribute to Open-Set-Go!

- Troubleshoot problems that existed code.
- Submit Bug/Feature issues related to [bugs](https://github.com/AgainIoT/Open-Set-Go/issues?q=is%3Aopen+is%3Aissue+label%3Abug) or desired [new features](https://github.com/AgainIoT/Open-Set-Go/issues?q=is%3Aissue+is%3Aopen).
- Submit Documentation issues for insufficient documents, translations.
- Start conversation at [Discussions](https://github.com/AgainIoT/Open-Set-Go/discussions) to provide a good example of preset.
- Start conversation by posting to [Discussions](https://github.com/AgainIoT/Open-Set-Go/discussions) about a framework that needs support.
- If there's anything you'd like to communicate about our project or open source, feel free to post it on [Discussions](https://github.com/AgainIoT/Open-Set-Go/discussions)! _"We hope that **Open-Set-Go Discussions** will become an active community."_

### Collaborators

If you want to contribute directly to our project, be our collaborators at Open-Set-Go! Join the [Slack](https://join.slack.com/t/open-set-go/shared_invite/zt-21jwlzs9g-qrajfUblcCtmCqAy0Xxj8w) to become a collaborator!

- **Develop Main Features**: <br>
  Collaborator will develop the main features with maintainers based on milestone
  All contributions are equally valuable and valuable to Open-Set-Go projects.and issues.

- **Communication**: <br>
  Communicate with Open-Set-Go maintainers with [Slack](https://join.slack.com/t/open-set-go/shared_invite/zt-21jwlzs9g-qrajfUblcCtmCqAy0Xxj8w) to carry out the project.

<br>

> All contributions are equally valuable and valuable to Open-Set-Go projects.

<br>

## Got a Question or Problem?

If you have any question or problem, start conversation at [Discussions](https://github.com/AgainIoT/Open-Set-Go/discussions)!
Then our maintainers, collaborators and contributers will help you.

<br>

## Submitting a issue!

_Do your best to follow these guidelines when submitting bug-related issues or feature requests. Then we will be able to respond quickly with good feedback more easily._

### Did you find a bug?

If you find a bug in the source code, you can help us by submitting an [Bug Report issue](https://github.com/AgainIoT/Open-Set-Go/issues?q=is%3Aopen+is%3Aissue+label%3Abug). Even better, you can submit a Pull Request with a fix.
<br>

### Do you want a new feature?

You can request a new feature by submitting an [Feature Request issue](https://github.com/AgainIoT/Open-Set-Go/issues).
_If you have a framework that needs support, please post it on Framework Request Issue!_
<br>

### Do you want to add documentation(translation)?

We're always looking for improvements to the documentation that make it more clear and accurate. Please let us know how the documentation can be improved such as typos and any content that is missing, unclear or inaccurate. We'll be happy to make the changes or help you make a contribution if you're interested!

You can add documentation by create a Pull Request!
<br><br>

## Submission Guidelines

You can view Submission Guidelines for each Server/Client from the link below.

- [Client Development Settings](https://github.com/AgainIoT/Open-Set-Go_client/blob/main/CONTRIBUTING.md#submission-guidelines)
- [Server Development Settings](https://github.com/AgainIoT/Open-Set-Go_server/blob/main/CONTRIBUTING.md#submission-guidelines)
  <br><br>

## Develoment Setting

You can view Development Settings for each Server/Client from the link below.

- [Client Development Settings](https://github.com/AgainIoT/Open-Set-Go_client/blob/main/CONTRIBUTING.md#develoment-setting)
- [Server Development Settings](https://github.com/AgainIoT/Open-Set-Go_server/blob/main/CONTRIBUTING.md#develoment-setting)
  <br><br>

## Code of Conduct

The maintainers who started the project are undergraduates of Kookmin University in South Korea. That's why we use English and Korean alternately. Of course, the project is based on English, but we welcome the contributions of both English and Korean.
~~_Don't be afraid We love English, too_~~

이 프로젝트를 시작한 maintainer들은 한국의 국민대학교 학부생들입니다. 그렇기 때문에 우리는 영어와 한국어를 같이 사용하고 있습니다. 물론, 프로젝트는 영어를 기반으로 하고 있지만, 영어와 한국어를 사용하는 기여를 모두 환영하고 있습니다. ~~_겁내지 말아요. 저희는 한국어를 사랑합니다._~~

_For more information, see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)._
<br><br>

## Style Guide

### GitLab-flow

We are developing using GitLab-flow. See [GitLab-flow](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/) for more information.

#### For Contributors

<img src="https://github.com/AgainIoT/Open-Set-Go/blob/main/.github/images/contributors_branching.jpg?raw=true"/>

#### For Collaborators

<img src="https://github.com/AgainIoT/Open-Set-Go/blob/main/.github/images/collaborators_branching.jpg?raw=true"/>

### Commit Message Style

| 타입     | 내용                                                                                  |
| -------- | ------------------------------------------------------------------------------------- |
| Init     | Development Environment Initial Setting                                               |
| Feat     | Add New Features                                                                      |
| Fix      | Fix Bugs                                                                              |
| Update   | Unlike Fix, it originally operated normally, but the concept of complement            |
| Remove   | When deleting a file                                                                  |
| Move     | When moving a code or file                                                            |
| Rename   | To modify a file or folder name                                                       |
| Docs     | If the document is modified                                                           |
| Comment  | Add and change required annotations                                                   |
| Refactor | Code refactoring (reorganizing code without changing results, increasing readability) |
| Test     | Test code                                                                             |
| Chore    | Other minor modifications                                                             |

```
git config --local commit.template .gitmessage.txt
```

_You can apply .gitmessage.txt in the same way as above!_

### Commit message format

```vi
<Type> : <Title> #<Issue Number>

<Content>
```

Samples

```
Feat : New feature added! #24

- something added 1
- another else added 2
```


_<center>※ Anyone who wants to be a collaborator of Open-Set-Go is always welcome!</center>_
