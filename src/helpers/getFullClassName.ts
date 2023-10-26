function getFullClassName(currentClassName: string, additionalClassName: string | undefined): string {
  return additionalClassName ? `${currentClassName} ${additionalClassName}` : currentClassName;
}

export default getFullClassName;
