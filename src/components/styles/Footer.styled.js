import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.footer};
	color: #fff;
	padding: 6.25em 0 3.75em;
	ul {
		list-style-type: none;
	}

	ul li {
		margin-bottom: 1.25em;
	}

	p {
		text-align: right;
	}
  
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		text-align: center;
		ul {
			padding: 0;
		}
		p {
			text-align: center;
		}
	}
`;
