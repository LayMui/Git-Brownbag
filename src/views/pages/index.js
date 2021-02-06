import git01 from './git01'
import git02 from './git02'
import git03 from './git03'
import git04 from './git04'
import git05 from './git05'
import git06 from './git06'
import git07 from './git07'
import git08 from './git08'
import git09 from './git09'
import git10 from './git10'
import git11 from './git11'
import git12 from './git12'
import git13 from './git13'
import git14 from './git14'

const pages = [
  {
    name: 'git01',
    meta: {
      title: 'Source Version Control'
    },
    component: git01
  },
  {
    name: 'git02',
    meta: {
      title: 'What is Source Control'
    },
    component: git02
  },
  {
    name: 'git03',
    meta: {
      title: 'Benefits of Source Control'
    },
    component: git03
  },
  {
    name: 'git04',
    meta: {
      title: 'Best Practices for Source Control'
    },
    component: git04
  },
  {
    name: 'git05',
    meta: {
      title: 'Git: Distributed Source Control'
    },
    component: git05
  },
  {
    name: 'git06',
    meta: {
      title: 'Git'
    },
    component: git06
  },
  {
    name: 'git07',
    meta: {
      title: 'Trunk-based development'
    },
    component: git07
  },
  {
    name: 'git08',
    meta: {
      title: 'Pull Request'
    },
    component: git08
  },
  {
    name: 'git09',
    meta: {
      title: 'Benefits of Git'
    },
    component: git09
  },
  {
    name: 'git10',
    meta: {
      title: 'Objections of Git'
    },
    component: git10
  },
  {
    name: 'git11',
    meta: {
      title: 'Working locally with Git'
    },
    component: git11
  },
  {
    name: 'git12',
    meta: {
      title: 'Basic Commands 1'
    },
    component: git12
  },
  {
    name: 'git13',
    meta: {
      title: 'Basic Commands 2'
    },
    component: git13
  },
  {
    name: 'git14',
    meta: {
      title: 'Further Commands'
    },
    component: git14
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages